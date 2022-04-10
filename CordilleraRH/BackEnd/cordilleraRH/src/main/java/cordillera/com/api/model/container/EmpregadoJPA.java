package cordillera.com.api.model.container;

import org.springframework.data.jpa.repository.JpaRepository;

import cordillera.com.api.model.components.Empregado;

public interface EmpregadoJPA extends JpaRepository<Empregado, Integer>{
    
}