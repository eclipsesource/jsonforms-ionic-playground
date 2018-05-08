export default {
  definitions: {
    order: {
      type: 'object',
      properties: {
        customer: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            department: { type: 'string' }
          }
        },
        title: { type: 'string' },
        processId: { type: 'string' },
        assignee: { type: 'string' },
        startDate: {
          type: 'string',
          format: 'date'
        },
        endDate: {
          type: 'string',
          format: 'date'
        },
        status: {
          type: 'string',
          enum: ['unordered', 'planned', 'ordered']
        }
      }
    }
  },
  type: 'object',
  properties: {
    orders: {
      type: 'array',
      items: {
        $ref: "#/definitions/order"
      }
    }
  },
  required: ['name']
};
