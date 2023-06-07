const Page = ({ children }) => {
  return (
    <main className='page'>
      <div className='container'>{children}</div>
    </main>
  );
};

export default Page;
