import { defineType, defineField } from 'sanity'
import { RocketIcon } from '@sanity/icons'

export const industrialVisit = defineType({
  name: 'industrialVisit',
  title: 'Industrial Visit',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Facility Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Visit Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
