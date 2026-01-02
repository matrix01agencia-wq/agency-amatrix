// Lógica Global Agency Amatrix
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema Amatrix Iniciado...");
    
    // Contador de Urgencia (opcional)
    const updateCouter = () => {
        const progress = document.querySelector('.urgent-bar div div');
        if(progress) progress.style.width = '35%'; 
    };
    updateCouter();
});
