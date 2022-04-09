package cordillera.com.api.model.container;

import org.springframework.data.jpa.repository.JpaRepository;

import cordillera.com.api.model.components.Empresa_Empregado;

public interface Empresa_EmpregadoJPA extends JpaRepository<Empresa_Empregado, Integer>{
    
}