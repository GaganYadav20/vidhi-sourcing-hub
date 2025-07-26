import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-primary-glow"></div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                VendorMandi
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering India's street food vendors through collective sourcing, verified suppliers, and transparent pricing.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* For Vendors */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">For Vendors</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Join Group Orders</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Find Suppliers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Track Orders</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Vendor Stories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing Calculator</a></li>
            </ul>
          </div>

          {/* For Suppliers */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">For Suppliers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Register as Supplier</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Manage Inventory</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Order Management</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Verification Process</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Delhi, Mumbai, Bangalore</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765-43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@vendormandi.in</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-medium text-foreground mb-2">Support Hours</h5>
              <p className="text-sm text-muted-foreground">
                Mon-Sat: 8:00 AM - 8:00 PM<br />
                Sun: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 VendorMandi. All rights reserved. Built with ❤️ for India's street food community.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;