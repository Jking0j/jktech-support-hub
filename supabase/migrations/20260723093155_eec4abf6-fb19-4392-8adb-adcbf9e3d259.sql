
DROP POLICY IF EXISTS "Anyone can submit contact enquiries" ON public.contact_enquiries;

CREATE POLICY "Anyone can submit valid contact enquiries"
ON public.contact_enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 120
  AND length(btrim(email)) BETWEEN 3 AND 254
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(message)) BETWEEN 10 AND 5000
  AND (phone IS NULL OR length(btrim(phone)) BETWEEN 5 AND 30)
);
