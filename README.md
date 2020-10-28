![Cloudflare GraphQL Gateway](/img/workers-react.png)

Workers React Example
====
Combining the power of Cloudflare Workers and React will allow you to render the
same React code you would on the browser on Cloudflare Workers.

### Dependencies
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/docs/install#debian-stable)

### Instructions

- `npm install`
- (send worker to GCP) `npm run terraform`
- `npm run deploy`
- (optional) `npm run preview`

#### Static hosting
In order for this application to work, you'll have to be able to serve `/worker.js` from your own origin. 
This example uses terraform to upload the worker script to Google Cloud Storage, but you are welcome to 
use any other origin.
- https://cloud.google.com/storage/docs/hosting-static-website

#### Terraform
If you'd like to use terraform to upload your worker scripts, you'll need a
vars file with the following variables

```hcl
# Cloudflare variables
variable "CLOUDFLARE_ACCOUNT_ID" {
  default = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}

variable "cloudflare_email" {
  default = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}

variable "cloudflare_token" {
  default = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}

# GCP exmaple variables
variable "project" {
  default = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}

variable "zone" {
  default = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}

variable "bucket" {
  default = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

after adding this file as `vars.tf` (terraform will pickup any `.tf` extension file) do
`terraform init` and `terraform apply`

And create a .env in the project root with the following:

```
CLOUDFLARE_SCRIPT=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLOUDFLARE_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLOUDFLARE_EMAIL=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLOUDFLARE_ACCOUNTID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### About
[Cloudflare Workers](http://developers.cloudflare.com/workers/) allow you to write JavaScript which runs on all of Cloudflare's
150+ global data centers.

[React](https://reactjs.org) makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
