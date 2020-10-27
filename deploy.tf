provider "cloudflare" {
  version = "~> 2.0"
  email   = var.cloudflare_email
  api_key = var.cloudflare_token
  account_id = var.CLOUDFLARE_ACCOUNT_ID
}

provider "google" {
  credentials = file("storage.json")
  project     = var.project
}

resource "cloudflare_worker_script" "cloudflarechallenge" {
  name = "cloudflarechallenge"
  content = file("dist/worker.js")
}

resource "google_storage_bucket_object" "worker" {
  name             = "worker.js"
  content_encoding = "application/javascript"
  content          = file("dist/worker.js")
  bucket           = var.bucket
}