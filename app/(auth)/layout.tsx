import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    return ( 
        <div className="flex items-center justify-center mx-auto max-w-7xl min-h-screen max-sm:px-4 max-sm:py-8 font-montserrat">
            {/* There's more to the css check globals.css in prep */}
            {children}
        </div>
    )
  
};

export default layout;
