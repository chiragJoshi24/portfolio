import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm('mldrnplk');

    if (state.succeeded) {
        return (
            <p className="font-bold">
                Thank you for reaching out! I&apos;ll get back to you soon.
            </p>
        );
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-[#1a1d23] text-white"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-[#1a1d23] text-white"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <textarea
                id="message"
                name="message"
                type="message"
                placeholder="Your Message"
                className="p-3 rounded bg-[#1a1d23] text-white h-28 min-h-[7rem] max-h-48 resize-y"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <button
                type="submit"
                className="hover:cursor-none p-3 bg-blue-500 text-white font-bold rounded hover:bg-yellow-900"
                disabled={state.submitting}
            >
                {state.submitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default Form;
