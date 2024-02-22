// Importing necessary components
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Defining the type of props that the layout component expects
type Props = {
    children: React.ReactNode; // Children prop can be any valid React node
};

// Defining the layout component
{/* It's commonly used for components that are designed to wrap other components or content and render them within their structure. */}
const layout = ({ children }: Props) => {
    return (
        // The main container with flexbox layout
        <div className="flex flex-col min-h-screen">
            {/* Header component */}
            <Header />
            {/* Hero component */}
            <Hero />
            {/* Main content container */}
            <div className="container mx-auto flex-1 py-10">
                {/* Render children components/content */}
                {children}
            </div>
            {/* Footer component */}
            <Footer />
        </div>
    );
};

// Exporting the layout component as the default export of the module
export default layout;
