import { Card, CardContent } from "@/components/ui/card"
import { Clock, UsersIcon } from "lucide-react"
import Image from "next/image"

interface ImageCardProps {
  imageUrl: string
  title: string
  description?: string
  time?: number
  recipe_yield?: number
}

export function ImageCard({ imageUrl, title, description, time, recipe_yield }: ImageCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl hover:shadow-black/50 transition-all ease-in">
       <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-1/3 aspect-square shadow">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-start p-6 sm:w-2/3">
            <h3 className="text-2xl font-bold mb-2 tracking-tight">{title}</h3>
            <div className="flex flex-row gap-4 text-sm">
              <div className="flex items-center my-2">
                <span className="flex flex-row gap-2">
                  <Clock className="text-primary size-5" /> Preparo: {time} min
                </span>
              </div>
              <div className="flex items-center">
                <span className="flex flex-row gap-2">
                  <UsersIcon className="text-primary size-5"/> Rendimento: {recipe_yield} porções
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
