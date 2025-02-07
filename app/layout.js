import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/all.min.css";
import "/public/assets/css/animate.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/meanmenu.css";
import "/public/assets/css/swiper-bundle.min.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/main.css";
import "/public/favicon.png";
import { Kumbh_Sans } from "next/font/google";
import { InternshipProvider } from "./context/InternshipContext";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import Script from "next/script"; 

const kumbh = Kumbh_Sans({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Codestrup Infotech",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbh.className}`}>
         {/* Google Analytics Script */}
         <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-EQTF867F4X" 
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EQTF867F4X');
          `}
        </Script>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (!window.fbq) {
                !function(f,b,e,v,n,t,s) {
                  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)
                }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', '489034397577329');
                fbq('track', 'PageView');
              }
            `,
          }}
        />
       
        <InternshipProvider>{children}</InternshipProvider>
        <Toaster position="top-right" />
        <Link href="https://lordicon.com/"></Link>
      </body>
    </html>
  );
}
