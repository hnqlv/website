---
title: Mocking pdfkit with Jest
summary: A simple guide on testing PDF generation in Node.js with Jest.
date: 2024-08-09
tags: ["writing", "jest", "pdfkit"]
---

Writing tests for Node.js libraries can be challenging, especially when dealing with native dependencies. This week, I needed to test a service function that generates PDFs using the pdfkit library.

To mock the pdfkit module, I created a function that mimics the methods used in my service function:

```ts
const createPdfkitMock = () => {
  const methods = [
    'fontSize',
    'text',
    'moveDown',
    'lineWidth',
    'strokeColor',
    'rect',
    'stroke',
    'fillColor',
    'font',
    'image',
    'addPage',
    'end',
  ]

  const pdf = methods.reduce((acc, method) => {
    acc[method] = jest.fn().mockReturnThis()
    return acc
  }, {} as any)

  pdf.page = {
    width: 500,
    height: 700,
    margins: { top: 30, bottom: 30, left: 30, right: 30 },
  }
  
  pdf.x = 0
  pdf.y = 0

  pdf.on = jest.fn((event, callback) => {
    if (event === 'data') callback(Buffer.from('mock data'))
    if (event === 'end') callback()
  })

  return pdf
}
```
Finally, I passed the mock function into Jest:

```ts
jest.mock('pdfkit', () => jest.fn(() => createPdfkitMock()))
```

And that’s it! With this setup, you can effectively test your PDF generation logic without relying on the actual pdfkit implementation. Happy coding!


