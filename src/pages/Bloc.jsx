function Bloc({ children, width = '300px', style={} }) {
    return (
      <div
        style={{
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '8px',
          backgroundColor: '#fff',
          width: width,
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}
      >
        {children}
      </div>
    );
  }
  
  export default Bloc;
  