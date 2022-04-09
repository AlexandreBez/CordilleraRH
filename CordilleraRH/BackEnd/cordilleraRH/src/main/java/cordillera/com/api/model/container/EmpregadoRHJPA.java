package cordillera.com.api.model.container;

import org.springframework.data.jpa.repository.JpaRepository;

import cordillera.com.api.model.components.EmpregadoRH;

public interface EmpregadoRHJPA extends JpaRepository<EmpregadoRH, Integer>{
    
}