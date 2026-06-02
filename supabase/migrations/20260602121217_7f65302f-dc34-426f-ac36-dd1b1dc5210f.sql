CREATE TABLE public.phone_otp_verifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  attempts INT NOT NULL DEFAULT 0,
  verified_at TIMESTAMPTZ,
  ip TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_otp_phone_created ON public.phone_otp_verifications (phone, created_at DESC);

GRANT ALL ON public.phone_otp_verifications TO service_role;
ALTER TABLE public.phone_otp_verifications ENABLE ROW LEVEL SECURITY;
-- No policies for anon/authenticated: this table is server-only via service role.

CREATE TABLE public.layout_download_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL,
  name TEXT,
  ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_download_log_phone ON public.layout_download_log (phone, created_at DESC);

GRANT ALL ON public.layout_download_log TO service_role;
ALTER TABLE public.layout_download_log ENABLE ROW LEVEL SECURITY;
-- No policies for anon/authenticated: server-only via service role.