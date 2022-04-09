package cordillera.com.api.model.container;

import org.springframework.data.jpa.repository.JpaRepository;

import cordillera.com.api.model.components.Empregado_Filhos;

public interface Empregado_FilhosJPA extends JpaRepository<Empregado_Filhos, Integer>{
    
}