
import { Upload } from "lucide-react";

export function Gallery() {
  return (
    <div className="space-y-4 mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif font-semibold">Gallery</h2>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center text-sm hover:bg-primary/90">
          <Upload className="w-4 h-4 mr-2" /> Upload Photo
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
            Photo {i}
          </div>
        ))}
      </div>
    </div>
  );
}
