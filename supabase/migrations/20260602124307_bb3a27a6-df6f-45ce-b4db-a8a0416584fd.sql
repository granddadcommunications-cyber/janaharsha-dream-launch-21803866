-- Add explicit deny-all RLS policies for server-only tables.
-- These tables are written/read only via service_role (server functions),
-- which bypasses RLS. Adding explicit restrictive policies satisfies the
-- linter and documents intent: no anon/authenticated access.

CREATE POLICY "Deny all access to layout_download_log"
ON public.layout_download_log
AS RESTRICTIVE
FOR ALL
TO anon, authenticated
USING (false)
WITH CHECK (false);

CREATE POLICY "Deny all access to phone_otp_verifications"
ON public.phone_otp_verifications
AS RESTRICTIVE
FOR ALL
TO anon, authenticated
USING (false)
WITH CHECK (false);