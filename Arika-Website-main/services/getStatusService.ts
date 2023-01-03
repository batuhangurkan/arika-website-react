import axios from 'axios'

import { JSDOM } from 'jsdom'

export type IGetStatusElements = { name: string; status: string }[]

const getStatusService = async () => {
  const { data } = await axios.get('https://arika.statuspage.io/')
  const { document } = new JSDOM(data).window

  const elements: IGetStatusElements = []

  document
    .querySelectorAll('div.component-container.border-color')
    .forEach((element) => {
      const name = element.querySelector('span.name')?.textContent
      const status = element.querySelector('span.component-status')?.textContent

      if (!name || !status || name.indexOf('www.arika.statuspage.io/') !== -1)
        return

      elements.push({ name: name.trim(), status: status.trim() })
    })

  return elements
}

export default getStatusService