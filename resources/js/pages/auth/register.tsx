import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    return (
        <AuthLayout
            title="Criar sua conta"
            description="Entre com seus dados para criar sua conta"
        >
            <Head title="Register" />
            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                {/* <Label htmlFor="first_name">First Name</Label> */}
                                <Input
                                    id="first_name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="given-name"
                                    name="first_name"
                                    placeholder="Nome"
                                    className="border-gray-300 focus:border-green-600 focus:ring-green-600 bg-white text-gray-900"
                                />
                                <InputError message={errors.first_name} />
                            </div>

                            <div className="grid gap-2">
                                {/* <Label htmlFor="last_name">Last Name</Label> */}
                                <Input
                                    id="last_name"
                                    type="text"
                                    required
                                    tabIndex={2}
                                    autoComplete="family-name"
                                    name="last_name"
                                    placeholder="Sobrenome"
                                    className="border-gray-300 focus:border-green-600 focus:ring-green-600 bg-white text-gray-900"
                                />
                                <InputError message={errors.last_name} />
                            </div>


                            <div className="grid gap-2">
                                {/* <Label htmlFor="email">Email address</Label> */}
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    className="border-gray-300 focus:border-green-600 focus:ring-green-600 bg-white text-gray-900"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                {/* <Label htmlFor="password">Password</Label> */}
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Senha"
                                    className="border-gray-300 focus:border-green-600 focus:ring-green-600 bg-white text-gray-900"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="grid gap-2">
                                {/* <Label htmlFor="password_confirmation">
                                    Confirm password
                                </Label> */}
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="Confirme a senha"
                                    className="border-gray-300 focus:border-green-600 focus:ring-green-600 bg-white text-gray-900"
                                />
                                <InputError
                                    message={errors.password_confirmation}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold cursor-pointer"
                                tabIndex={5}
                                data-test="register-user-button"
                            >
                                {processing && <Spinner />}
                                Cadastrar-se
                            </Button>

                        </div>

                        <div className="text-center text-sm text-gray-700">
                            Já tem uma conta?{' '}
                            <TextLink href={login()} tabIndex={6} className="text-green-600 hover:text-green-700 font-medium">
                                Faça login
                            </TextLink>
                        </div>

                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
