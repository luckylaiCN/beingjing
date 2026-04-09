import SiteHeader from "@/components/widgets/website-header"

export default function AboutUsPage() {
  return (
    <div>
      <SiteHeader />
      <div className="flex h-screen w-screen">
        <div className="m-auto text-center">
          <h1 className="mb-4 text-4xl font-bold">About Us</h1>
          <p className="text-lg text-secondary-foreground md:max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
            adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
            pellentesque sem placerat in id. Placerat in id cursus mi pretium
            tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
          </p>
        </div>
      </div>
      <div className="flex h-screen w-screen">
        <div className="m-auto text-center">
          <h1 className="mb-4 text-4xl font-bold">Our Mission</h1>
          <p className="text-lg text-secondary-foreground md:max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
            adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
            pellentesque sem placerat in id. Placerat in id cursus mi pretium
            tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
          </p>
        </div>
      </div>
    </div>
  )
}
