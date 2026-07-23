-- Allow authenticated users (the business owner) to read contact enquiries via MCP
DROP POLICY IF EXISTS "No public read access" ON public.contact_enquiries;

CREATE POLICY "Authenticated users can view enquiries"
ON public.contact_enquiries
FOR SELECT
TO authenticated
USING (true);

GRANT SELECT ON public.contact_enquiries TO authenticated;