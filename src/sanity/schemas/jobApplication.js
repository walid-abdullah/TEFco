export default {
  name: 'jobApplication',
  title: 'Job Applications',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Applicant Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'jobTitle',
      title: 'Applied Position',
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
      name: 'phone',
      title: 'Phone / WhatsApp',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'portfolioUrl',
      title: 'Portfolio / Showreel URL',
      type: 'url',
      readOnly: true,
    },
    {
      name: 'experienceYears',
      title: 'Experience (Years)',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'tools',
      title: 'Software Proficiency',
      type: 'array',
      of: [{ type: 'string' }],
      readOnly: true,
    },
    {
      name: 'salaryExpectation',
      title: 'Salary Expectation',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'coverNote',
      title: 'Cover Note / Bio',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'status',
      title: 'Application Status',
      type: 'string',
      options: {
        list: [
          { title: '🟡 New Applicant', value: 'new' },
          { title: '🔵 Reviewing Showreel', value: 'reviewing' },
          { title: '🟢 Interview / Shortlisted', value: 'shortlisted' },
          { title: '🔴 Rejected / Archive', value: 'rejected' }
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
      title: 'fullName',
      subtitle: 'jobTitle',
      status: 'status'
    },
    prepare({ title, subtitle, status }) {
      const statusIcon = status === 'shortlisted' ? '🟢' : status === 'reviewing' ? '🔵' : status === 'rejected' ? '🔴' : '🟡';
      return {
        title: `${statusIcon} ${title || 'Applicant'}`,
        subtitle: subtitle || 'Job Candidate'
      };
    }
  }
}
