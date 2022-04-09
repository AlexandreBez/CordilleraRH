package cordillera.com.api.model.container;

import org.springframework.data.jpa.repository.JpaRepository;

import cordillera.com.api.model.components.Empresa;

public interface EmpresaJPA extends JpaRepository<Empresa, Integer>{
    
}