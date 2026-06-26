import { defineType, defineField } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export const sponsorPage = defineType({
  name: 'sponsorPage',
  title: 'Sponsor Page Config',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    // HERO
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    // WHO WE ARE
    defineField({
      name: 'whoTitle',
      title: 'Who We Are Title',
      type: 'string',
    }),
    defineField({
      name: 'whoDescription1',
      title: 'Who We Are Description Paragraph 1',
      type: 'text',
    }),
    defineField({
      name: 'whoDescription2',
      title: 'Who We Are Description Paragraph 2',
      type: 'text',
    }),
    defineField({
      name: 'whoImages',
      title: 'Who We Are Images (Exactly 4 images)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    // WHY PARTNER WITH US
    defineField({
      name: 'whyCards',
      title: 'Why Partner With Us Cards (Exactly 4 cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'whyCard',
          title: 'Why Card',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' },
            { 
              name: 'icon', 
              title: 'Icon Name (e.g. GraduationCap, Network, Presentation, Sun)', 
              type: 'string',
              options: {
                list: [
                  { title: 'Graduation Cap', value: 'GraduationCap' },
                  { title: 'Network', value: 'Network' },
                  { title: 'Presentation', value: 'Presentation' },
                  { title: 'Sun', value: 'Sun' },
                ]
              }
            },
          ]
        }
      ]
    }),
    // ACHIEVEMENTS OVERRIDE
    defineField({
      name: 'achievementsTitle',
      title: 'Achievements Section Title',
      type: 'string',
    }),
    defineField({
      name: 'achievementsDescription',
      title: 'Achievements Section Description',
      type: 'text',
    }),
    // PARTNERSHIP OPPORTUNITIES
    defineField({
      name: 'partnerships',
      title: 'Partnership Opportunities (Exactly 4 cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'partnershipCard',
          title: 'Partnership Opportunity Card',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ]
        }
      ]
    }),
    // COMMUNITY IMPACT STATS
    defineField({
      name: 'impactStats',
      title: 'Community Impact Stats (Exactly 4 stats)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'statItem',
          title: 'Stat Item',
          fields: [
            { name: 'value', title: 'Stat Value (e.g. 86, 1500+)', type: 'string' },
            { name: 'label', title: 'Stat Label (e.g. Events Conducted)', type: 'string' },
          ]
        }
      ]
    }),
    // COLLABORATION TABLE
    defineField({
      name: 'collaborations',
      title: 'Ways to Collaborate (Table Rows)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'collabRow',
          title: 'Collaboration Table Row',
          fields: [
            { name: 'feature', title: 'Feature Name', type: 'string' },
            { name: 'eventPartner', title: 'Available for Event Partner', type: 'boolean' },
            { name: 'industryPartner', title: 'Available for Industry Partner', type: 'boolean' },
            { name: 'renewablePartner', title: 'Available for Renewable Energy Partner', type: 'boolean' },
          ]
        }
      ]
    }),
    // INDUSTRIAL VISITS OVERRIDE
    defineField({
      name: 'industrialVisitsTitle',
      title: 'Industrial Visits Title',
      type: 'string',
    }),
    defineField({
      name: 'industrialVisitsDescription',
      title: 'Industrial Visits Description',
      type: 'text',
    }),
    // GALLERY HIGHLIGHTS
    defineField({
      name: 'galleryImages',
      title: 'Highlights From Our Activities (Exactly 6 images)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    // IMPACT METRICS
    defineField({
      name: 'impactMetrics',
      title: 'Partnership Impact Metrics (Exactly 3 cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'metricCard',
          title: 'Metric Card',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'value', title: 'Value (e.g. 92%)', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' },
            { name: 'detail', title: 'Footnote / Detail', type: 'string' },
          ]
        }
      ]
    }),
    // CONTACT POC
    defineField({
      name: 'contactTitle',
      title: 'Contact Section Title',
      type: 'string',
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Section Description',
      type: 'text',
    }),
    defineField({
      name: 'pocName',
      title: 'POC Name',
      type: 'string',
    }),
    defineField({
      name: 'pocEmail',
      title: 'POC Email',
      type: 'string',
    }),
    defineField({
      name: 'pocPhone',
      title: 'POC Phone',
      type: 'string',
    }),
    defineField({
      name: 'pocLinkedin',
      title: 'POC LinkedIn Profile Link',
      type: 'string',
    }),
  ]
})
