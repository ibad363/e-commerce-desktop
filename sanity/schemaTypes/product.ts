import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'productTitle',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(100)
          .error('Product title is required and should not exceed 100 characters.'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .positive()
          .error('Price must be a positive number.'),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // Enable cropping and hotspot selection for individual images
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(4)
          .max(4)
          .error('Exactly 4 images are required for each product.'),
    }),
    defineField({
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error('Inventory must be a non-negative number.'),
    }),
  ],
});
