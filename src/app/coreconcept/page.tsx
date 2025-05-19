"use client"

import { Button } from "@/components/ui/button";
import MyButton from "@/components/MyButton"
import { Eye} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CoreConcept() {
  const imageProperty = [
    {id:1, path:"/images/window.svg", alt:"image de window", with:200, height:100},
    {id:2, path:"/images/globe.svg", alt:"image de globe", with:200, height:100}
  ]
  return (
    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10 justify-items-normal content-center-safe">
      <div className="justify-self-end-safe">
        <Button variant='outline'>
          <Eye size={24}/>
          Click me
        </Button>
      </div>
      <div className="shadow-xl rounded-lg">
        <div className="flex justify-around items-center-safe">
          {
            imageProperty.map((image)=>{
              return (
                <Image
                  key={image.id}
                  src={image.path}
                  alt={image.alt}
                  width={image.with}
                  height={image.height}
                />
              )
            })
          }
        </div>
      </div>
      <div className="shadow-xl rounded-lg" >
        <MyButton size="xl">Test du hover, outline`offset, color`, active</MyButton>
      </div>
      <div className="mx-auto maw-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl" data-theme= "dar">
          <div className="md:flex dark:bg-[url('/images/building.jpg')]">
            <div className="md:shrink-0">
              <Image
                className="h-48 w-full object-cover md:h-full md:w-48"
                src='/images/building.jpg'
                alt="Architecture d'un Batiment moderne"
                width={100}
                height={100}
              />
            </div>
            <div className="p-8">
              <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
              <Link href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline dark:text-zinc-300">
                Incredible accomodation for your team
              </Link>
              <p className="mt-2 text-gray-500 dark:text-zinc-400">
                Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                places to do just that.
              </p>
            </div>
          </div>
      </div>

      <div>
          {/* 
            flex-initial: peut rétrécir mais ne peut pas grandir,
            flex-shrink-0: empêcher de rétrécir,
            flex-none: empêche la flexibilité,
            flex-1: occupe tout le reste de l'espace disponible,
            grow-0: empêche de croître, changer la valeur pour faire croître,
            order-number/first/last: pour contrôler l'ordre des éléments flexibles,

          */}
        <div className="mx-auto max-w-md md:min-w-2xl">
          <div className="flex flex-wrap ">
          <div className="bg-green-600 basis-1/2">Div 1</div>
          <div className="bg-amber-400 basis-1/2">Div 2</div>
          <div className="bg-amber-800 basis-1/2 flex-1">Div 3</div>
          </div>
        </div>
      </div>

    </div>
  );
}

{/* <div class="md:max-xl:flex">
  max pour toutes les variantes pour cibler des points d'arrêt réactifs avec les variantes.
</div> */}

{/* <div class="@container">
  <div class="flex flex-col @md:flex-row">
    Marque un élément comme conteneur donc les autres s'adapte en fonction de la taille du conteneur
    @container/main pour les nommer donc pouvoir utiliser des conteneurs imbriqués
  </div>
</div> */}


// Pour styliser les 1er ou derniers enfants par exemple: first:pt-0 last:pb-0
// suivant la parité aussi : odd:bg-white even:bg-gray-50
// Pour les formulaires:  className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."
// Pour les sélèctions et les éléments actifs:  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
// Pour les éléments actifs et les liens déjà visités: active:bg-blue-600, visited:text-purple-600
// variante empty: className = "empty:hidden"
// variante enabled et disabled: className = " enabled:hover:border-gray-400 disabled:opacity-75"
// variante required: className = " border required:border-red-500"
// variante valid: className = "border valid:border-green-500"
// variante : className = ""
