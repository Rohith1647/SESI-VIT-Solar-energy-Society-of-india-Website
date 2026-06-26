import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const boardMember = defineType({
  name: 'boardMember',
  title: 'Board Member',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Faculty', value: 'faculty' },
          { title: 'Student', value: 'student' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department/School (Faculty Only)',
      type: 'string',
      description: 'e.g. School of Electronics Engineering (SENSE)',
    }),
    defineField({
      name: 'link',
      title: 'LinkedIn/Profile Link (Optional)',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort members on the page',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
