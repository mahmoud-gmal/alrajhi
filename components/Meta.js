import Head from 'next/head'
const Meta = ({ title }) => {
  return (
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>
    </>
  )
}

// Meta.defaultProps = {
//   title: 'مجتمع صفوة التقني',
//   keywords: `تصميم مواقع وتطبيقات, تصميم متاجر الاكترونية`,
//   description: 'أفضل شركة تصميم المواقع الإلكترونية و تطبيقات الجوال',
// }

export default Meta
