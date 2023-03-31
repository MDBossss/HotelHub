interface Props{
    sectionTitle: string,
    pageTitles: string[]
}

const FooterLinks = ({sectionTitle,pageTitles}:Props) => {

  return (
    <div className="footer-section">
        <h4>{sectionTitle}</h4>
        {pageTitles?.map((pageTitle,index) => (
            <a href={`#${sectionTitle}`} key={index}>{pageTitle}</a>
        ))}
    </div>
  )
}

export default FooterLinks