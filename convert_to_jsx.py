import re
import json

def style_to_dict(style_str):
    # This is a very basic style parser for JSX
    style_str = style_str.strip()
    if not style_str: return "{}"
    declarations = style_str.split(';')
    obj = {}
    for d in declarations:
        if ':' not in d: continue
        prop, val = d.split(':', 1)
        prop = prop.strip()
        val = val.strip()
        # Convert kebab-case to camelCase
        prop_parts = prop.split('-')
        prop_camel = prop_parts[0] + ''.join(word.capitalize() for word in prop_parts[1:])
        obj[prop_camel] = val
    return json.dumps(obj)

def convert_html_to_jsx(html_content):
    # Replace class= with className=
    jsx = html_content.replace('class="', 'className="')
    jsx = jsx.replace("class='", "className='")
    
    # Fix style attributes
    def style_replacer(match):
        style_val = match.group(1)
        return 'style={' + style_to_dict(style_val) + '}'
    
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    jsx = re.sub(r"style='([^']*)'", style_replacer, jsx)
    
    # Fix self closing tags (img, input, hr, br, iframe)
    jsx = re.sub(r'<(img|input|hr|br|iframe)([^>]*)>', r'<\1\2 />', jsx)
    # But iframe sometimes has closing tag </iframe>, so let's just do img and input
    jsx = re.sub(r'<(img|input|hr|br)([^>]*)>', r'<\1\2 />', jsx)
    
    # Clean up double slashes just in case
    jsx = jsx.replace('//>', '/>')
    
    return jsx

with open('../Website/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract from <section class="hero" to </section> of contact
# We know contact ends around line 873. We'll just search.
start_idx = html.find('<section class="hero')
end_idx = html.find('</section>', html.rfind('<section id="contact"')) + 10

main_content = html[start_idx:end_idx]
jsx_content = convert_html_to_jsx(main_content)

# We need an explicit component for Page
page_js = """import Link from 'next/link';

export default function Home() {
  return (
    <>
""" + jsx_content + """
    </>
  );
}
"""

with open('src/app/page.js', 'w', encoding='utf-8') as f:
    f.write(page_js)

print("Conversion complete!")
