const Footer = () => {
  return (
    <footer className="flex justify-center items-center absolute bottom-0 left-0 right-0 bg-neutral-900 py-2 px-4">
      <div className="grow text-stone-400">
        made by <a
          target="_blank"
          href="https://www.linkedin.com/in/danielrn07/"
          className="text-white select-none transition ease-in hover:text-rose-600"
        >
          Daniel Nascimento
        </a>
      </div>
      <a target="_blank" href="https://github.com/danielrn07/taskify">
        <img
          src="/linkedin-icon.svg"
          alt="LinkedIn icon"
          className="h-6 self-left"
        />
      </a>
    </footer>
  )
}

export default Footer
