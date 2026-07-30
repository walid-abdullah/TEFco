import os
import re
import json

def style_to_dict(style_str):
    style_str = style_str.strip()
    if not style_str: return "{}"
    declarations = style_str.split(';')
    obj = {}
    for d in declarations:
        if ':' not in d: continue
        prop, val = d.split(':', 1)
        prop = prop.strip()
        val = val.strip()
        prop_parts = prop.split('-')
        prop_camel = prop_parts[0] + ''.join(word.capitalize() for word in prop_parts[1:])
        obj[prop_camel] = val
    return json.dumps(obj)

def convert_html_to_jsx(html_content):
    jsx = html_content.replace('class="', 'className="')
    jsx = jsx.replace("class='", "className='")
    
    def style_replacer(match):
        return 'style={' + style_to_dict(match.group(1)) + '}'
    
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    jsx = re.sub(r"style='([^']*)'", style_replacer, jsx)
    
    # Fix self closing tags
    jsx = re.sub(r'<(img|input|hr|br)([^>]*)>', r'<\1\2 />', jsx)
    
    jsx = jsx.replace('allowfullscreen=""', 'allowFullScreen')
    jsx = re.sub(r'onmouseover=\"[^\"]*\"', '', jsx)
    jsx = re.sub(r'onmouseout=\"[^\"]*\"', '', jsx)
    
    # Replace HTML comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx)
    
    return jsx

src_dir = '../Website'
dest_dir = 'src/app'

files_to_migrate = [
    'blogs.html', 'article.html', 'booking.html', 'pricing.html', 
    'podcast.html', 'reels.html', 'saas.html', 'ugc.html', 
    'youtube.html', 'management.html'
]

for file in files_to_migrate:
    src_path = os.path.join(src_dir, file)
    if not os.path.exists(src_path):
        print(f"Skipping {file}, not found.")
        continue
        
    with open(src_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Find the main content
    # Usually starts after </header> and ends before <footer
    start_idx = html.find('</header>')
    if start_idx != -1:
        start_idx += 9
    else:
        start_idx = html.find('<body>') + 6
        
    end_idx = html.find('<footer')
    if end_idx == -1:
        end_idx = html.find('<!-- Floating Chat Widget -->')
    if end_idx == -1:
        end_idx = html.find('<script')

    if start_idx == -1 or end_idx == -1:
        print(f"Could not parse boundaries for {file}")
        continue
        
    main_content = html[start_idx:end_idx]
    
    # Check for iframe
    main_content = main_content.replace('</iframe>', '')
    if 'iframe' in main_content:
         main_content = re.sub(r'<iframe([^>]*)>', r'<iframe\1 />', main_content)
         
    jsx_content = convert_html_to_jsx(main_content)
    
    # Fix some specific JSX errors that might happen
    jsx_content = jsx_content.replace('/></iframe>', '/>')
    jsx_content = jsx_content.replace('></textarea>', ' />')
    jsx_content = jsx_content.replace('<br / />', '<br />')
    jsx_content = jsx_content.replace('//>', '/>')
    
    route_name = file.replace('.html', '')
    route_dir = os.path.join(dest_dir, route_name)
    os.makedirs(route_dir, exist_ok=True)
    
    page_js = f"""import Link from 'next/link';

export const metadata = {{
  title: "The Editly Foundry | {route_name.capitalize()}",
}};

export default function {route_name.capitalize()}Page() {{
  return (
    <>
{jsx_content}
    </>
  );
}}
"""
    with open(os.path.join(route_dir, 'page.js'), 'w', encoding='utf-8') as f:
        f.write(page_js)
    
    print(f"Migrated {file} to {route_dir}/page.js")

print("All secondary pages migrated successfully.")
