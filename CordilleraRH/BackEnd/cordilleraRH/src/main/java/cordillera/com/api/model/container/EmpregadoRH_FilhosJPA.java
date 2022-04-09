package cordillera.com.api.model.container;

import org.springframework.data.jpa.repository.JpaRepository;

import cordillera.com.api.model.components.Empregado_RH_Filhos;

public interface EmpregadoRH_FilhosJPA extends JpaRepository<Empregado_RH_Filhos, Integer>{
    
}