import { MdOutlineEmail } from 'react-icons/md'
import { AltFont, Code } from '@/components/styled'

export const Contact = (props: { lang: 'ja' | 'en' }) => {
  return (
    <section id="contact">
      <h2 className="text-lg font-bold"><AltFont>CONTACT</AltFont></h2>
      <div>
        <p className="py-2"><MdOutlineEmail className="inline text-sm" /> <Code>shu[at]apkas.net</Code></p>
      </div>
    </section>
  )
}
