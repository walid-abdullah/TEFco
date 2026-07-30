export default {
  name: 'contactMessage',
  title: 'Contact Form Leads',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'type',
      title: 'Message Type',
      type: 'string',
      options: {
        list: [
          { title: 'General Inquiry', value: 'general' },
          { title: 'Booking Request', value: 'booking' }
        ]
      },
      readOnly: true,
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Unread', value: 'unread' },
          { title: 'Read / Replied', value: 'read' },
          { title: 'Spam', value: 'spam' }
        ]
      },
      initialValue: 'unread'
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      status: 'status'
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title || 'Unknown Sender',
        subtitle: `${subtitle === 'booking' ? 'Booking Request' : 'General Message'} - ${status}`
      }
    }
  },
  // Order by newest first by default in the list
  orderings: [
    {
      title: 'Newest First',
      name: 'submittedAtDesc',
      by: [
        { field: 'submittedAt', direction: 'desc' }
      ]
    }
  ]
}
