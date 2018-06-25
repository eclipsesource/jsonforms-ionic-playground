export default {
  type: 'object',
  properties: {
    nodes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          value: { type: 'number' },
          subtree: {
            $ref: '#/properties/nodes'
          }
        }
      }
    }
  }
};

// export default {
//   type: 'object',
//   properties: {
//     nodes: {
//       type: 'array',
//       items: {
//         type: 'object',
//         properties: {
//           value: { type: 'number' },
//           subtree: {
//             // should use ref from ehre $ref #/properties/nodes
//             type: 'array',
//             items: {
//               type: 'object',
//               properties: {
//                 value: { type: 'number' },
//                 subtree: {
//                   $ref: '#/properties/nodes'
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
