
import Link from 'next/link';
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

const Footer = () => {

     
// NEW 
if (typeof window !== "undefined") {

    // normalize the Contact Forms 7 response
    // const stripHtml = (string) => string.replace(/(<([^>]+)>)/gi, "");
    const normalizeResponse = (url, response) => {
        if (
            url.match(/wp-json\/contact-form-7\/v1\/contact-forms\/\d+\/feedback/)
        ) {
            return normalizeContactForm7Response(response);
        }
        return {
            isSuccess: false,
            message: "Are you submitting to the right URL?",
            validationError: {}
        };
    };
    
    const normalizeContactForm7Response = (response) => {
        const isSuccess = response.status === "mail_sent";
        const message = response.message;
        const validationError = isSuccess
            ? {}
            : Object.fromEntries(
                  response.invalid_fields.map((error) => {
                      const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];
    
                      return [key, error.message];
                  })
              );
    
        return {
            isSuccess,
            message,
            validationError
        };
    };


const formSubmissionHandler = (event) => {
    event.preventDefault();
  
    const formElement = event.target,
      { action, method } = formElement,
      body = new FormData(formElement);
  
    fetch(action, {
      method,
      body
    })
    .then((response) => response.json())
    .then((response) => normalizeResponse(action, response))
    .then((response) => {
        // alert(response.message);
        if (response.isSuccess) {
            toast.success(response.message,{});
            formElement.reset();
        }else{
            toast.error(response.message,{});
        }
    })
    .catch((error) => {
        alert("Check the console for the error details.");
        console.log(error);
    });
  };
  const formElement = document.querySelector("#contact_form");
  formElement.addEventListener("submit", formSubmissionHandler);
}

  return (
<>
    <section className="contact-h" id="contact_footer">
        <div className="container">
            <div className="row">
                
                <div className="col-md-12">
                    <div className="contact-inner">
                        <div className="row">
                            
                            <div className="col-md-6 col-sm-12">
                                <div className="form-contact">
                                    <h3 className="wow animate__animated animate__bounceInUp">لديك اى سؤال؟ <span>تواصل معنا الان</span></h3>
                                    <form id="contact_form"action="https://safwa-tech.com/wp-json/contact-form-7/v1/contact-forms/1011/feedback" method="post">
                                        <div className="form-group wow animate__animated animate__bounceInUp">
                                            <input type="text"  name="your-name" placeholder="الاسم" className="form-control" required/>
                                        </div>
                                        <div className="form-group wow animate__animated animate__bounceInUp">
                                            <input type="email" name="your-email" placeholder="البريد الالكترونى" className="form-control" required />
                                        </div>
                                        <div className="form-group wow animate__animated animate__bounceInUp">
                                            <input type="text" name="your-phone-num" placeholder="رقم الجوال" className="form-control" required/>
                                        </div>
                                        <div className="form-group wow animate__animated animate__bounceInUp">
                                            <textarea name="your-message" placeholder="رسالتك هنا" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group wow animate__animated animate__bounceInUp">
                                            <button type="submit" className="btn btn-form d-blockl">
                                                <span>ارسال</span>
                                                 <Image className="contact_icon" alt="contact-icon" src="/assets/images/paper-plane.png" width="100%" height="100%" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                           

                            
                            <div className="col-md-6 col-sm-12">
                                <div className="info-con">
                                    <div className="info-inner">
                                        <ul>
                                            <li className="wow animate__animated animate__bounceInUp">
                                                <Link href="tel:0564047086"><a><i className="flaticon-phone-call"></i><span>0564047086</span></a></Link>
                                            </li>
                                            <li className="wow animate__animated animate__bounceInUp">
                                                <Link href="mailto:sales@safwa-tech.com"><a><i className="flaticon-envelope"></i><span>sales@safwa-tech.com</span></a></Link>
                                            </li>
                                            <li className="wow animate__animated animate__bounceInUp">
                                                <Link href="#"><a><i className="flaticon-pin"></i><span>جدة - البغدادية الشرقية - شارع المدارس</span></a></Link>
                                            </li>
                                        </ul>
                                        <div className="social-co">
                                            <Link href="#" target="_blank"><a className="wow animate__animated animate__bounceInUp">
                                                <i className="flaticon-snapchat"></i>
                                                </a></Link>
                                            <Link href="#" target="_blank"><a className="wow animate__animated animate__bounceInUp">
                                                <i className="flaticon-twitter"></i>
                                                </a></Link>
                                            <Link href="#" target="_blank"><a className="wow animate__animated animate__bounceInUp">
                                                <i className="flaticon-instagram"></i>
                                                </a></Link>
                                            <Link href="#" target="_blank"><a className="wow animate__animated animate__bounceInUp">
                                                <i className="flaticon-facebook"></i>
                                                </a></Link>
                                        </div>
                                        <div className="img wow animate__animated animate__bounceInUp">
                                           
                                                <Image alt="icon contact" src="/assets/images/contact.svg" width={271} height="100%" layout="responsive" />
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>

    <footer>

        <div className="footer-top">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="copy-right">
                            <h3 className="wow animate__animated animate__bounceInUp">مؤسسة صفوة للتصميم</h3>
                            <h3 className="wow animate__animated animate__bounceInUp">SAFWA DESING Est</h3>
                            <Link href="#"><a className="wow animate__animated animate__bounceInUp">
                              <div style={{maxWidth: '100%', height: '100%', position: 'relative'}}>
                                <Image alt="marouf" src="/assets/images/marouf.png" objectFit='contain' layout="fill" />
                              </div>
                                </a></Link>
                            <h3 className="wow animate__animated animate__bounceInUp">رقم معروف: 159711</h3>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

    </footer>
    <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={true}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
            />
    </>
  )
};

export default Footer;
