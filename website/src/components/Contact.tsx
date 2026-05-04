import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const EMAIL = "harindracs12@gmail.com";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      toast({ title: "Please check your input", description: first.message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { name, email, subject, message } = parsed.data;
    const { error } = await supabase
      .from("contact_submissions")
      .insert({ name, email, subject, message });
    setSubmitting(false);
    if (error) {
      toast({
        title: "Couldn't send your message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out — I'll get back to you soon.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };


  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Build Something Together"
      subtitle="Open to internships, collaborations and full-time opportunities."
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-6">
        {/* Contact info */}
        <div className="gradient-card border border-border rounded-3xl p-8 shadow-elegant flex flex-col gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-4 p-5 rounded-2xl bg-secondary border border-border transition-smooth hover:border-primary/60 hover:-translate-y-0.5"
          >
            <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <Mail size={20} className="text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-medium truncate">{EMAIL}</div>
            </div>
          </a>
          <a
            href="tel:+918867554866"
            className="flex items-center gap-4 p-5 rounded-2xl bg-secondary border border-border transition-smooth hover:border-primary/60 hover:-translate-y-0.5"
          >
            <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <Phone size={20} className="text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="font-medium">+91 8867554866</div>
            </div>
          </a>

          <div className="flex gap-3 mt-2">
            <Button variant="outline" size="lg" asChild className="flex-1">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="flex-1">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="gradient-card border border-border rounded-3xl p-8 shadow-elegant space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={update("name")} placeholder="Your name" maxLength={100} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" maxLength={255} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" value={form.subject} onChange={update("subject")} placeholder="What's this about?" maxLength={150} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me about your project, role, or idea..."
              rows={6}
              maxLength={2000}
              required
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
            <Send size={18} /> {submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
