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
        ordered: { type: 'boolean' },
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
        },
        // subOrders: {
        //   type: 'array',
        //   items: {
        //     type: 'object',
        //     properties: {
        //       id: { type: 'string' }
        //     }
        //   }
        // }
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
