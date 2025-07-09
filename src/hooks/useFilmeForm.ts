"use client";
import { FilmeService } from "@/services/api";
import { useState } from "react";

interface FilmeFormState {
    titulo: string;
    genero: string;
    duracao: string;
}

export const useFilmeForm = () => {
    const [formState, setFormState] = useState<FilmeFormState>({
        titulo: '',
        genero: '',
        duracao: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormState(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted', formState);
        setError(null);
        setSuccess(false);

        if (!formState.titulo || !formState.genero || !formState.duracao) {
            setError('Todos os campos são obrigatórios');
            return;
        }

        const duracaoNumber = parseInt(formState.duracao);
        if (isNaN(duracaoNumber)) {
            setError('Duração deve ser um número');
            return;
        }

        try {
            setIsLoading(true);
            await FilmeService.adicionaFilme({
                titulo: formState.titulo,
                genero: formState.genero,
                duracao: duracaoNumber
            });

            setSuccess(true);

            setFormState({
                titulo: '',
                genero: '',
                duracao: ''
            })
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formState,
        handleChange,
        handleSubmit,
        isLoading,
        error,
        success,
    };
}