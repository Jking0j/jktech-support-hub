-- Create a table for contact enquiries
CREATE TABLE public.contact_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert enquiries (public contact form)
CREATE POLICY "Anyone can submit contact enquiries"
ON public.contact_enquiries
FOR INSERT
WITH CHECK (true);

-- Only allow authenticated admin users to view enquiries (for now, deny all reads from client)
CREATE POLICY "No public read access"
ON public.contact_enquiries
FOR SELECT
USING (false);