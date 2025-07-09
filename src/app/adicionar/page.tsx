"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { useFilmeForm } from "@/hooks/useFilmeForm";

export default function AdicionaFilmes() {
  const {
    formState,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    success,
  } = useFilmeForm();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Card className="w-[20rem] sm:w-[30rem] h-auto]">
        <CardHeader>
          <CardTitle>Adicione um Filme a lista</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="titulo">Titulo</Label>
                <Input
                  id="titulo"
                  type="text"
                  placeholder="Nome Filme"
                  required
                  className="w-full"
                  value={formState.titulo}
                  onChange={handleChange}
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
                    className="w-full"
                    value={formState.genero}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2 w-24">
                  <Label htmlFor="duracao">Duração</Label>
                  <Input
                    id="duracao"
                    type="text"
                    placeholder="min"
                    required
                    className="w-full"
                    value={formState.duracao}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            {error && (
              <Alert variant="destructive" className="my-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert variant="default" className="my-4">
                <AlertDescription>Filme adicionado com sucesso!</AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full my-5" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Adicionar'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}