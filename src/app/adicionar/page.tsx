import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"


export default function AdicionaFilmes() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Card className="w-[20rem] sm:w-[30rem] h-[25rem]">
        <CardHeader>
          <CardTitle>Adicione um Filme a lista</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="titulo">Titulo</Label>
                <Input
                  id="titulo"
                  type="text"
                  placeholder="Nome Filme"
                  required
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col gap-2 flex-grow">
                  <Label htmlFor="genero">Genero</Label>
                  <Input 
                  id="genero" 
                  type="text" 
                  placeholder="Genero Filme"
                  required 
                  className="w-full" />
                </div>
                <div className="flex flex-col gap-2 w-24"> {/* largura fixa menor para duração */}
                  <Label htmlFor="duracao">Duração</Label>
                  <Input 
                  id="duracao" 
                  type="text" 
                  placeholder="mim"
                  required 
                  className="w-full" />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Adicionar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
