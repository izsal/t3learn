import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/2089c94b-9053-4851-8def-69688b6bd1da-479yfh.png",
  "https://utfs.io/f/61d26617-e740-4c4c-a1c5-5760514c10a2-xbzqjg.jpg",
  "https://utfs.io/f/e77b9318-4ede-45cd-9c80-d0df6b141ac8-lip8mi.jpg",
  "https://utfs.io/f/4117fd25-db24-4d11-8346-a091dcbeea7f-xi9eh2.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
