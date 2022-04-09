package cordillera.com.api.model.components;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "EMPREGADO_FILHOS")
public class Empregado_Filhos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID_EMPREGADO_FILHO")
    private Integer id_empregadoFilho;
    
    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_empregado")
    private Empregado id_Empregado;

    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_Filho")
    private Filho id_filho;

    public Empregado_Filhos() {};

    public Empregado_Filhos(Integer id_empregadoFilho, Empregado id_Empregado, Filho id_filho) {
        this.id_empregadoFilho = id_empregadoFilho;
        this.id_Empregado = id_Empregado;
        this.id_filho = id_filho;
    };

    /**
     * @return Integer return the id_empregadoFilho
     */
    public Integer getId_empregadoFilho() {
        return id_empregadoFilho;
    }

    /**
     * @param id_empregadoFilho the id_empregadoFilho to set
     */
    public void setId_empregadoFilho(Integer id_empregadoFilho) {
        this.id_empregadoFilho = id_empregadoFilho;
    }

    /**
     * @return Empregado return the id_Empregado
     */
    public Empregado getId_Empregado() {
        return id_Empregado;
    }

    /**
     * @param id_Empregado the id_Empregado to set
     */
    public void setId_Empregado(Empregado id_Empregado) {
        this.id_Empregado = id_Empregado;
    }

    /**
     * @return Filho return the id_filho
     */
    public Filho getId_filho() {
        return id_filho;
    }

    /**
     * @param id_filho the id_filho to set
     */
    public void setId_filho(Filho id_filho) {
        this.id_filho = id_filho;
    }

}