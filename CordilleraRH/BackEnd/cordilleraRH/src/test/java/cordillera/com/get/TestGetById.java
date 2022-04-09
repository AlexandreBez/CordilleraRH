package cordillera.com.get;

import static org.mockito.Answers.RETURNS_SELF;

import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import cordillera.com.api.model.components.Empregado;
import cordillera.com.api.model.container.EmpregadoJPA;

@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
@WebMvcTest
@AutoConfigureMockMvc
public class TestGetById {

    static String EMPREGADO_API = "/Empregado";

    @Autowired
    MockMvc mvc;

    @MockBean
    EmpregadoJPA empregadoJPA;

    @Test
    @DisplayName("Deve pegar empregado pelo id")
    public void mustFindById() throws Exception{
        
    }
}