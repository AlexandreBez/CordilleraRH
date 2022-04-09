package cordillera.com.api.model.container;

import org.springframework.data.jpa.repository.JpaRepository;

import cordillera.com.api.model.components.Filho;

public interface FilhoJPA extends JpaRepository<Filho, Integer>{
    
}