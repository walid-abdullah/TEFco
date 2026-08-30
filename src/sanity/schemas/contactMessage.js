export default {
  name: 'contactMessage',
  title: 'Client Leads & Project Briefs',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Full Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp / Phone Number',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'service',
      title: 'Requested Services',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'budget',
      title: 'Project Budget',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'message',
      title: 'Project Brief / Message',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'status',
      title: 'Lead Pipeline Status',
      type: 'string',
      options: {
        list: [
          { title: '🟡 New Incoming Lead', value: 'new' },
          { title: '🔵 Contacted on WhatsApp / Email', value: 'contacted' },
          { title: '🟣 Strategy Call Booked', value: 'call_booked' },
          { title: '🟢 Closed / Active Client', value: 'closed' },
          { title: '🔴 Lost / Unresponsive', value: 'lost' }
        ]
      },
      initialValue: 'new'
    },
    {
      name: 'submittedAt',
      title: 'Submitted Date',
      type: 'datetime',
      readOnly: true,
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'service',
      status: 'status',
      budget: 'budget'
    },
    prepare({ title, subtitle, status, budget }) {
      const statusIcon = status === 'closed' ? '🟢' : status === 'call_booked' ? '🟣' : status === 'contacted' ? '🔵' : status === 'lost' ? '🔴' : '🟡';
      return {
        title: `${statusIcon} ${title || 'New Client'} (${budget || 'N/A'})`,
        subtitle: subtitle || 'Project Inquiry'
      };
    }
  }
}
