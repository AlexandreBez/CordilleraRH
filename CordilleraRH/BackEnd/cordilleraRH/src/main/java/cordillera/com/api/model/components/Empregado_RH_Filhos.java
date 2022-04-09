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
@Table(name = "EMPREGADO_RH_FILHOS")
public class Empregado_RH_Filhos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID_EMPREGADO_RH_FILHO")
    private Integer id_empregado_RH_Filho;
    
    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_empregado_RH")
    private EmpregadoRH id_EmpregadoRH;

    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_filhoEmpregadoRH")
    private Filho_Empregado_RH filho_Empregado_RH;
    
    public Empregado_RH_Filhos(){}

    public Empregado_RH_Filhos(Integer id_empregado_RH_Filho, EmpregadoRH id_EmpregadoRH,
            Filho_Empregado_RH filho_Empregado_RH) {
        this.id_empregado_RH_Filho = id_empregado_RH_Filho;
        this.id_EmpregadoRH = id_EmpregadoRH;
        this.filho_Empregado_RH = filho_Empregado_RH;
    };

    /**
     * @return Integer return the id_empregado_RH_Filho
     */
    public Integer getId_empregado_RH_Filho() {
        return id_empregado_RH_Filho;
    }

    /**
     * @param id_empregado_RH_Filho the id_empregado_RH_Filho to set
     */
    public void setId_empregado_RH_Filho(Integer id_empregado_RH_Filho) {
        this.id_empregado_RH_Filho = id_empregado_RH_Filho;
    }

    /**
     * @return EmpregadoRH return the id_EmpregadoRH
     */
    public EmpregadoRH getId_EmpregadoRH() {
        return id_EmpregadoRH;
    }

    /**
     * @param id_EmpregadoRH the id_EmpregadoRH to set
     */
    public void setId_EmpregadoRH(EmpregadoRH id_EmpregadoRH) {
        this.id_EmpregadoRH = id_EmpregadoRH;
    }

    /**
     * @return Filho_Empregado_RH return the filho_Empregado_RH
     */
    public Filho_Empregado_RH getFilho_Empregado_RH() {
        return filho_Empregado_RH;
    }

    /**
     * @param filho_Empregado_RH the filho_Empregado_RH to set
     */
    public void setFilho_Empregado_RH(Filho_Empregado_RH filho_Empregado_RH) {
        this.filho_Empregado_RH = filho_Empregado_RH;
    }

}