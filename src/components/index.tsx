import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ICreateProposal } from './types';

const FormComponent = () => {
    const createProposalFormSchema = z.object({
        full_name: z.string().nonempty('Nome é obrigatório').min(1).max(29),
        cpf: z.string().nonempty('CPF é obrigatório').min(1).max(11),
        address: z.string().nonempty('Endereço é obrigatório').min(1).max(50),
        value: z.number().nonnegative(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateProposal>({
        resolver: zodResolver(createProposalFormSchema),
    });

    const createProposal = (data: ICreateProposal) => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center h-full">
            <form
                onSubmit={handleSubmit(createProposal)}
                action=""
                className="flex bg-slate-100 justify-center flex-col gap-4 p-24 rounded-md"
            >
                <div className="flex items-start justify-center flex-col gap-4">
                    <label htmlFor="full_name">Nome Completo</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome completo"
                        className="p-4 rounded-lg w-full"
                        id="full_name"
                        {...register('full_name')}
                    />
                    {errors.full_name && (
                        <span className="text-red-600">
                            {errors.full_name.message}
                        </span>
                    )}
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        placeholder="Digite seu CPF"
                        className="p-4 rounded-lg w-full"
                        id="cpf"
                        {...register('cpf')}
                    />
                    {errors.cpf && (
                        <span className="text-red-600">
                            {errors.cpf.message}
                        </span>
                    )}
                    <label htmlFor="address">Endereço</label>
                    <input
                        type="text"
                        placeholder="Digite seu endereço"
                        className="p-4 rounded-lg w-full"
                        id="address"
                        {...register('address')}
                    />
                    {errors.address && (
                        <span className="text-red-600">
                            {errors.address.message}
                        </span>
                    )}
                    <label htmlFor="value">
                        Valor do Empréstimo Pretendido
                    </label>
                    <input
                        type="number"
                        placeholder="Digite o valor"
                        className="p-4 rounded-lg w-full"
                        id="value"
                        {...register('value', { valueAsNumber: true })}
                    />
                    {errors.value && (
                        <span className="text-red-600">
                            {errors.value.message}
                        </span>
                    )}
                </div>

                <button className="bg-green-400 p-4 justify-center items-center flex text-white mt-6 rounded-md">
                    Enviar Proposta
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
